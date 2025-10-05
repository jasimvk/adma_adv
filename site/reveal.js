// reveal.js - small intersection observer to toggle .in-view
(function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view')
        obs.unobserve(entry.target)
      }
    })
  },{threshold:0.12})

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.pre-animate').forEach(el=>obs.observe(el))
  })
})()
