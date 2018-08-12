import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} title="侣程婚礼">
      <Resource name="users" list={UserList} />
      <Resource name="posts" options={{ label: 'Wedding Info' }} list={PostList} edit={PostEdit} create={PostCreate}/>
  </Admin>
);

export default App;
