# mattermost-plugin-tonitter
A mattermost plugin for replacing links to x.com with links to xcancel.com

# To Compile This

1. Go to the `webapp` directory
2. Ensure you have the necessary dependencies installed: `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
`
3. Ensure that `webapp/dist` exists (`mkdir dist` in `webapp`)
4. Generate a minified bundle: `./node_modules/.bin/webpack --mode=production`
5. Ensure that the directory `com.mattermost.tonitter` exists (`mkdir -p com.mattermost.tonitter` if it doesn't exist)
6. Copy the main.js file that was generated in step 4 into the `com.mattermost.tonitter` directory - `cp -r dist/main.js com.mattermost.tonitter/`
7. Copy the manifest file (plugin.json) - `cp plugin.json com.mattermost.tonitter`
8. Tar it up - `tar -czvf plugin.tar.gz com.mattermost.tonitter`


