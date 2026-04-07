#note
first letter of componnent must be capital
defining algo and reconcilation
only one componet or function allowed to default export 
wrap named export components in curly braces

LifeCycle method:
- class component uses life cycle method to perform multiple tasks.
- life cycle method has so much unnessary boilerplate code so the application is getting complex and hard to manage.
> lifecycle methods  : mounting,updating,unmounting
- so thats why we shifted to functional component.

we cant re render normal variable in jsx.
inside onclick or any event just write the function name, no ()

to pass props the child must be rendered in parent

props drilling : 

## HOOKS
hooks are functions, it is predfined , allows to use state an dother features without writing a class, in class we had diff life cycle methods..but in this we dont need

> 2 Rules for using hooks:
only call hooks at top level 

const app=()=>{
    //hooks
    return (

    )
}
only call hooks from react functions

Note : we can't re render or update the value declared in normal js variable

