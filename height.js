function Connor(){
    var img = [
        {
            flipid:'flip1',
            frontid: 'front1',
            backid: 'back1',
            imgid:'img1'
        },
        {
            flipid:'flip4',
            frontid: 'front4',
            backid: 'back4',
            imgid:'img4'
        },
        {
            flipid:'flip2',
            frontid: 'front2',
            backid: 'back2',
            imgid:'img2'
        },
        {
            flipid:'flip5',
            frontid: 'front5',
            backid: 'back5',
            imgid:'img5'
        },
        {
            flipid:'flip3',
            frontid: 'front3',
            backid: 'back3',
            imgid:'img3'
        },
        {
            flipid:'flip6',
            frontid: 'front6',
            backid: 'back6',
            imgid:'img6'
        },
    ]

    for (i = 0; i < img.length; i++) {
        document.getElementById(img[i].flipid).style.height = document.getElementById(img[i].imgid).height + 'px'
        document.getElementById(img[i].frontid).style.height = document.getElementById(img[i].imgid).height + 'px'
        document.getElementById(img[i].backid).style.height = document.getElementById(img[i].imgid).height + 'px'
    }
}