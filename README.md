# Getting Started with React Ai-Chat demo project

### `Important` 
Before you start testing the project you should do two steps listed below.

- #### Step 1: Create OpenAI account and create your private OpenAI "key" and provide "Organization ID".\
Link to `key`: [platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) \
Link to `Organization ID`: [platform.openai.com/account/org-settings](https://platform.openai.com/account/api-keys)\

- #### Step 2:
Create `.env` file in project folder and indicate in the file two lines of code indicated below\
- `API_KEY=key`
- `ORG=Organization ID`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run server`
Runs the localhost server and handle Open-AI API request
Open [http://localhost:3005](http://localhost:3005) to view it in your browser.

### `npm run live`
Runs simultaneously commands "server" + "start" \
Provided via lib "concurrently" \
You can find more about it [npmjs.com/package/concurrently](https://www.npmjs.com/package/concurrently)