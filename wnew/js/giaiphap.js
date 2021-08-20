const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
});

scroll.reveal(`.col-lg-4`,{
    origin:"bottom",
    interval:100
});
scroll.reveal(`.col-lg-3,.starting-img`,{
    origin:"left",
    interval:100
})
scroll.reveal(`.col-lg-7`,{
    origin:"right",
    interval:100
})