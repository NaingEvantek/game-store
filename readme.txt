Application Layers

[Components] todoForm,TodoList
[Custom Hooks] useTodos,useAddTodo
[HTTP Services] todoService
[API Client] APIClient

1) Install react-query
   - npm i @tanstack/react-query@4.28
2) Install react-query-devtools
   - npm i @tanstack/react-query-devtools@4.28
3) Install react-infinite-scroll-component
   - npm i react-infinite-scroll-component@6.1
3) Install ms (for staleTime Calculation)
   - npm i ms@2.1.3 
   - npm i -D @types/ms
   - need to install both to import ms in tsx 
4) Install zustand
   - npm i zustand@4.3.7


Notes *
- Server State : Use React Query insated of React Context. If not , it'll very messy in App.jsx
- Client State : Use React Context and Local State instead of React Query.