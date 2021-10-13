export function getList() {
    return fetch('http://52.26.193.201:3000/product/')
      .then(data => data.json())
  }
  
  export function setItem(item) {
   return fetch('http://52.26.193.201:3000/product/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }