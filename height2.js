function JSfunc(){
    var img = [
        {
            flipid:'flip10',
            frontid: 'front10',
            backid: 'back10',
            imgid:'img10'
        },
        {
            flipid:'flip11',
            frontid: 'front11',
            backid: 'back11',
            imgid:'img11'
        },
        {
            flipid:'flip12',
            frontid: 'front12',
            backid: 'back12',
            imgid:'img12'
        },
        {
            flipid:'flip13',
            frontid: 'front13',
            backid: 'back13',
            imgid:'img13'
        },
        {
            flipid:'flip14',
            frontid: 'front14',
            backid: 'back14',
            imgid:'img14'
        },
        {
            flipid:'flip15',
            frontid: 'front15',
            backid: 'back15',
            imgid:'img16'
        },
        {
            flipid:'flip17',
            frontid: 'front17',
            backid: 'back17',
            imgid:'img17'
        },
        {
            flipid:'flip18',
            frontid: 'front18',
            backid: 'back18',
            imgid:'img18'
        },
        {
            flipid:'flip19',
            frontid: 'front19',
            backid: 'back19',
            imgid:'img19'
        }
    ]

    for (i = 0; i < img.length; i++) {
        document.getElementById(img[i].flipid).style.height = document.getElementById(img[i].imgid).height + 'px'
        document.getElementById(img[i].frontid).style.height = document.getElementById(img[i].imgid).height + 'px'
        document.getElementById(img[i].backid).style.height = document.getElementById(img[i].imgid).height + 'px'
    }
}