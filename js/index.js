//轮播图
  (function() {
    let item = document.querySelector('#item').querySelectorAll('img')
    let lis = document.querySelector('#lis').querySelectorAll('li')
    console.log(item,lis);
    for(var i=0;i<item.length;i++) {
      item[i].style.display = 'none'
      item[0].style.display = 'block'
    }
    lis.forEach(function(value,index) {
      value.addEventListener('click',function() {
        item[index].style.display = 'block'
      })
    })
  })()