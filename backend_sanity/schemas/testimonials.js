export default{
    name: 'testimonials',
    title: 'testimonials',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type:'image',
            Options: {
                hotspot:true, //by using this feature the user will be able to crop his/her image, without the use of sanity we have to implement this feature from the scratch
            },
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        },

    ]
}