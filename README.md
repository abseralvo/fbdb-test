Reproduction steps:

1. clone the repo
2. cd functions
3. npm install

# TO Test
4. npm run serve
5. hit the function endpoint http://localhost:5099/fbdb-test-001/us-central1/helloWorld

You should see the following error appear in your console
`@firebase/database: FIREBASE WARNING: wss:// URL used, but browser isn't known to support websockets.  Trying anyway.`

And if you wait long enough (1 min should be default) you will see the function timeout
# To Fix
6. add "@firebase/database-compat": "0.1.2" the dependency node in functions/package.json
7. run `npm i`
8. Go back to step 4

You should now see the execution without errors