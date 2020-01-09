## Product List  <img src="http://runahr.com/wp-content/themes/runa-new/dist/img/runa-logo.png" width="50" height="30">

This component is an example to learn to use [bit](https://bit.dev) a tool for share components and utils.

This is an example for build a good documentation on each component.

This component fetch data in useEffect hook

```javascript
useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character").then(res => res.json()).then(res=> {
      setCharacters(res.results)
    }).catch(err => console.log(err))
  },[]);
```


### Props

| Prop        | Type        | Required           | defautl  |
| ------------- | ------------- |:-------------:| -----:|
| Url      | string | true | `https://rickandmortyapi.com/api/character`
| prop placeholder      | boolean      |   false |  false
| prop placeholder | func      |    true |  X
