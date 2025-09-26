#!/usr/bin/env node

/**
 * Sitemap Regeneration Script
 * 
 * This script helps you test sitemap generation locally by:
 * 1. Starting your Next.js dev server
 * 2. Fetching the sitemap
 * 3. Displaying the results
 */

const { spawn } = require('child_process');
const { fetchUrl, parseSitemap } = require('./validate-sitemap');

/**
 * Start Next.js dev server
 */
function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting Next.js dev server...');
    
    const server = spawn('npm', ['run', 'dev'], {
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    let serverReady = false;
    
    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      
      // Check if server is ready
      if (output.includes('Ready') || output.includes('localhost:3000')) {
        if (!serverReady) {
          serverReady = true;
          setTimeout(() => resolve(server), 2000); // Wait 2 seconds for full startup
        }
      }
    });
    
    server.stderr.on('data', (data) => {
      console.error(`Server error: ${data}`);
    });
    
    server.on('close', (code) => {
      if (code !== 0 && !serverReady) {
        reject(new Error(`Server exited with code ${code}`));
      }
    });
    
    // Timeout after 30 seconds
    setTimeout(() => {
      if (!serverReady) {
        server.kill();
        reject(new Error('Server startup timeout'));
      }
    }, 30000);
  });
}

/**
 * Test sitemap generation
 */
async function testSitemap() {
  console.log('🔍 Testing sitemap generation...');
  console.log('=' .repeat(60));
  
  let server = null;
  
  try {
    // Start dev server
    server = await startDevServer();
    
    // Wait a bit more for the server to be fully ready
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Fetch sitemap
    console.log('\n📥 Fetching local sitemap...');
    const response = await fetchUrl('http://localhost:3000/sitemap.xml');
    
    if (response.statusCode !== 200) {
      throw new Error(`Sitemap returned status ${response.statusCode}`);
    }
    
    // Parse and display results
    const urls = parseSitemap(response.data);
    
    console.log(`\n✅ Successfully generated ${urls.length} URLs`);
    
    // Group by type
    const blogUrls = urls.filter(u => u.url.includes('/blog/'));
    const caseStudyUrls = urls.filter(u => u.url.includes('/case-study/'));
    const featureUrls = urls.filter(u => u.url.includes('/features/'));
    const toolUrls = urls.filter(u => u.url.includes('/free-tools/'));
    const otherUrls = urls.filter(u => 
      !u.url.includes('/blog/') && 
      !u.url.includes('/case-study/') && 
      !u.url.includes('/features/') && 
      !u.url.includes('/free-tools/')
    );
    
    console.log('\n📊 URL Breakdown:');
    console.log(`  📝 Blog posts: ${blogUrls.length}`);
    console.log(`  📚 Case studies: ${caseStudyUrls.length}`);
    console.log(`  ⚡ Features: ${featureUrls.length}`);
    console.log(`  🛠️  Free tools: ${toolUrls.length}`);
    console.log(`  🏠 Other pages: ${otherUrls.length}`);
    
    // Show case studies specifically
    if (caseStudyUrls.length > 0) {
      console.log('\n📚 Case Study URLs:');
      caseStudyUrls.forEach(url => {
        console.log(`  ${url.url} (priority: ${url.priority})`);
      });
    }
    
    // Show blog posts (first 5)
    if (blogUrls.length > 0) {
      console.log('\n📝 Blog Post URLs (first 5):');
      blogUrls.slice(0, 5).forEach(url => {
        console.log(`  ${url.url} (priority: ${url.priority})`);
      });
      if (blogUrls.length > 5) {
        console.log(`  ... and ${blogUrls.length - 5} more`);
      }
    }
    
    // Check priorities
    const priorities = urls.map(u => u.priority).filter(p => p !== null);
    const uniquePriorities = [...new Set(priorities)];
    console.log(`\n🎯 Priority Distribution:`);
    uniquePriorities.forEach(priority => {
      const count = priorities.filter(p => p === priority).length;
      console.log(`  Priority ${priority}: ${count} URLs`);
    });
    
    console.log('\n✨ Sitemap test complete!');
    
  } catch (error) {
    console.error('❌ Error testing sitemap:', error.message);
  } finally {
    // Clean up server
    if (server) {
      console.log('\n🛑 Stopping dev server...');
      server.kill();
    }
  }
}

// Run the test
if (require.main === module) {
  testSitemap();
}

module.exports = { testSitemap };
