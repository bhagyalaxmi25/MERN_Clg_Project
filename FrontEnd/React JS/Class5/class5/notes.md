# useEffect:-
## React app Life cycle
    - mount
    - update
    - unmount
### mount
- When first time renders in DOM.
### update
- DOM updating 
### unmount
- Remove from DOM  

## Where use what :
- class base components use Life Cycle
- in functional base components use **useEffect** hook

## useEffect uses -
- Didmount
- Didupdate
- Willunmount

## useEffect :
- It is a React hook. 
- It handles Side Effect in function components. 
        **Side Effect**
        - Suscribe Events
        - Data fetching
        - Timer
 
### Why ?
- Optimized
- Cleaner Code
- Life Cycle Method

### Syntax:- 
useEffect(() => {
    //code
}, [state]);
 
* No dependency -> didMountComponent
* [state] (empty Array) 
    -> didUpdate Components
* CleanUp -> function -> willUnmount    

# AXIOS :- 
- Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. 
- HTTP client to handle HTTP request.
- Automatically converts to JSON File.
### Syntax:-
- node_modules -> axios -> [npm i axios] command
axios.get()