#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * 
 * This script validates your sitemap by:
 * 1. Fetching the sitemap from your local/deployed site
 * 2. Checking each URL for accessibility
 * 3. Reporting any broken links or issues
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const SITEMAP_URL = 'https://www.tryanalyze.ai/sitemap.xml';
const LOCAL_SITEMAP_URL = 'http://localhost:3000/sitemap.xml';

/**
 * Fetch content from a URL
 */
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data,
          headers: res.headers
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Parse sitemap XML and extract URLs
 */
function parseSitemap(xmlContent) {
  const urls = [];
  const urlMatches = xmlContent.match(/<url>[\s\S]*?<\/url>/g);
  
  if (urlMatches) {
    urlMatches.forEach(urlBlock => {
      const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/);
      const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/);
      const priorityMatch = urlBlock.match(/<priority>(.*?)<\/priority>/);
      
      if (locMatch) {
        urls.push({
          url: locMatch[1],
          lastmod: lastmodMatch ? lastmodMatch[1] : null,
          priority: priorityMatch ? parseFloat(priorityMatch[1]) : null
        });
      }
    });
  }
  
  return urls;
}

/**
 * Check if a URL is accessible
 */
async function checkUrl(url) {
  try {
    const response = await fetchUrl(url);
    return {
      url,
      status: response.statusCode,
      accessible: response.statusCode >= 200 && response.statusCode < 400
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      accessible: false,
      error: error.message
    };
  }
}

/**
 * Main validation function
 */
async function validateSitemap(sitemapUrl = SITEMAP_URL) {
  console.log(`🔍 Validating sitemap: ${sitemapUrl}`);
  console.log('=' .repeat(60));
  
  try {
    // Fetch sitemap
    console.log('📥 Fetching sitemap...');
    const sitemapResponse = await fetchUrl(sitemapUrl);
    
    if (sitemapResponse.statusCode !== 200) {
      throw new Error(`Sitemap returned status ${sitemapResponse.statusCode}`);
    }
    
    // Parse URLs
    console.log('📋 Parsing sitemap URLs...');
    const urls = parseSitemap(sitemapResponse.data);
    console.log(`Found ${urls.length} URLs in sitemap`);
    
    // Group URLs by type
    const urlsByType = {
      blog: urls.filter(u => u.url.includes('/blog/')),
      caseStudy: urls.filter(u => u.url.includes('/case-study/')),
      features: urls.filter(u => u.url.includes('/features/')),
      freeTools: urls.filter(u => u.url.includes('/free-tools/')),
      other: urls.filter(u => !u.url.includes('/blog/') && !u.url.includes('/case-study/') && !u.url.includes('/features/') && !u.url.includes('/free-tools/'))
    };
    
    console.log('\n📊 URL Distribution:');
    console.log(`  Blog posts: ${urlsByType.blog.length}`);
    console.log(`  Case studies: ${urlsByType.caseStudy.length}`);
    console.log(`  Features: ${urlsByType.features.length}`);
    console.log(`  Free tools: ${urlsByType.freeTools.length}`);
    console.log(`  Other pages: ${urlsByType.other.length}`);
    
    // Check priority distribution
    const priorities = urls.map(u => u.priority).filter(p => p !== null);
    const uniquePriorities = [...new Set(priorities)];
    console.log(`\n🎯 Priority Distribution:`);
    uniquePriorities.forEach(priority => {
      const count = priorities.filter(p => p === priority).length;
      console.log(`  Priority ${priority}: ${count} URLs`);
    });
    
    // Validate URLs (sample check for performance)
    console.log('\n🔗 Checking URL accessibility (sampling first 10 URLs)...');
    const sampleUrls = urls.slice(0, 10);
    const results = await Promise.all(sampleUrls.map(checkUrl));
    
    const accessible = results.filter(r => r.accessible);
    const broken = results.filter(r => !r.accessible);
    
    console.log(`✅ Accessible: ${accessible.length}/${results.length}`);
    if (broken.length > 0) {
      console.log(`❌ Broken URLs:`);
      broken.forEach(result => {
        console.log(`  ${result.url} - Status: ${result.status}${result.error ? ` (${result.error})` : ''}`);
      });
    }
    
    console.log('\n✨ Sitemap validation complete!');
    
  } catch (error) {
    console.error('❌ Error validating sitemap:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const sitemapUrl = args[0] || (args.includes('--local') ? LOCAL_SITEMAP_URL : SITEMAP_URL);
  
  validateSitemap(sitemapUrl);
}

module.exports = { validateSitemap, parseSitemap, checkUrl };
