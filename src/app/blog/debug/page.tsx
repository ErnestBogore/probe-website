/**
 * DatoCMS Debug Page
 * 
 * Shows information about your DatoCMS connection and available content models.
 * Useful for troubleshooting blog setup issues.
 */

import { checkBlogModelsExist, getAvailableQueries } from '@/lib/datocms-introspection';
import Link from 'next/link';

export default async function DebugPage() {
  const modelCheck = await checkBlogModelsExist();
  const availableQueries = await getAvailableQueries();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">DatoCMS Debug Information</h1>
          <p className="text-gray-600 mt-2">
            Check your DatoCMS connection and available content models
          </p>
        </div>

        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Connection Status</h2>
          {modelCheck.error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">❌ Connection Failed</p>
              <p className="text-red-600 text-sm mt-1">{modelCheck.error}</p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ Connected Successfully</p>
              <p className="text-green-600 text-sm mt-1">
                Found {modelCheck.totalQueries} available queries
              </p>
            </div>
          )}
        </div>

        {/* Blog Models Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog Content Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Blog Posts</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  modelCheck.allBlogPosts 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {modelCheck.allBlogPosts ? '✅ Available' : '❌ Missing'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Authors</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  modelCheck.allAuthors 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {modelCheck.allAuthors ? '✅ Available' : '⚠️ Optional'}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Individual Post</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  modelCheck.blogPost 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {modelCheck.blogPost ? '✅ Available' : '❌ Missing'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tags</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  modelCheck.allTags 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {modelCheck.allTags ? '✅ Available' : '⚠️ Optional'}
                </span>
              </div>
            </div>
          </div>

          {!modelCheck.allBlogPosts && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">🛠 Setup Required</h3>
              <p className="text-blue-800 text-sm mb-3">
                You need to create the Blog Post content model in DatoCMS to use the blog functionality.
              </p>
              <a 
                href="https://probe-9594.admin.datocms.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Open DatoCMS Admin →
              </a>
            </div>
          )}
        </div>

        {/* Available Queries */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Available GraphQL Queries ({availableQueries.length})
          </h2>
          {availableQueries.length === 0 ? (
            <p className="text-gray-500 italic">No queries available or connection failed</p>
          ) : (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
               {availableQueries.map((query: { name: string; description?: string; type: string }) => (
                <div 
                  key={query.name}
                  className="bg-gray-50 rounded-lg p-3"
                >
                  <h3 className="font-mono text-sm font-medium text-gray-900">
                    {query.name}
                  </h3>
                  {query.description && (
                    <p className="text-xs text-gray-600 mt-1">{query.description}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Type: {query.type || 'Unknown'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <div className="space-y-3">
            <p className="text-gray-600">
              If you&apos;re seeing missing models, follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Go to your <a href="https://probe-9594.admin.datocms.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DatoCMS admin panel</a></li>
              <li>Navigate to <strong>Settings → Models</strong></li>
                             <li>Create a new model called <strong>&quot;Blog Post&quot;</strong></li>
              <li>Set the API key to <code className="bg-gray-100 px-1 rounded">blog_post</code></li>
              <li>Add fields as described in <code>BLOG_SETUP.md</code></li>
              <li>Refresh this page to check again</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 