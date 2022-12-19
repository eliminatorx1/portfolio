export default{
    name: "testimonials",
    title: "Testimonials",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"company",
            title:"Company",
            type:"string"
        },
        {
            name:"imageurl",
            title:"ImgURL",
            type:"image",
            Options: {
                hotspot:true, //by using this feature the user will be able to crop his/her image, without the use of sanity we have to implement this feature from the scratch
            }
        },
        {
            name:"feedback",
            title:"Feedback",
            type:"string"
        },

    ],
}