# Token Update Guide

To ensure consistent token retrieval throughout the application, please update all instances of direct token retrieval with our `getToken` helper function.

## Files to Update

### 1. MembersGrid.jsx
In `d:\language-exchange\client\src\components\Community\MembersGrid.jsx`:
- Import the getToken helper: `import getToken from "@/shared/getToken";`
- Replace all instances of `const token = Cookies.get("token");` with `const token = getToken();`

### 2. ProfileDetails.jsx
In `d:\language-exchange\client\src\components\profile\ProfileDetails.jsx`:
- Already imported the getToken helper
- Replace line 86: `if (!Cookies.get("token")) {` with `if (!getToken()) {`
- Replace line 94: `Authorization: \`Bearer ${Cookies.get("token")}\`,` with `Authorization: \`Bearer ${getToken()}\`,`

### 3. Any other files
Search for `Cookies.get("token")` in any other files and replace with `getToken()`

## Explanation
The `getToken` helper function retrieves the token from both cookies and localStorage, ensuring that the token is available even if one storage method fails. This helps maintain user sessions across browser restarts and tab closures.

```javascript
// Helper function to get token from both cookies and localStorage
const getToken = () => {
  const token = Cookies.get("token") || 
              (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null);
  return token;
};
```

This approach ensures that as long as the token exists in either storage location, the user will remain authenticated.
