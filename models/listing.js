const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
    type:String,
    required:true,
    },
    description:String,
    image:{
    type:String,
    default:"https://in.images.search.yahoo.com/images/view;_ylt=Awrx.olIOM9n4I8_ZhC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFiYjg5NTBlMTM4MDk2NTZkMjdmNzU2NjRmYzA5YjUxBGdwb3MDMjgEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bof%2Bcoconut%2Btree%26type%3DE211IN1589G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D28&w=1063&h=1600&imgurl=1.bp.blogspot.com%2F-72CtF1Y7TjQ%2FXRyvsQ1YgkI%2FAAAAAAAAAGM%2FDltes0yg5IAk6NxlT40qDKt7EsbWVSTOQCLcBGAs%2Fs1600%2Fbeach-coconut-trees-coconuts-240526.jpg&rurl=https%3A%2F%2Fmywebbyfan1.blogspot.com%2F2019%2F07%2Fbeach-coconut-trees.html&size=547KB&p=image+of+coconut+tree&oid=1bb8950e13809656d27f75664fc09b51&fr2=piv-web&fr=mcafee&tt=Beach+Coconut+Trees&b=0&ni=21&no=28&ts=&tab=organic&sigr=IaPZ0H.UawYH&sigb=jmP0JnAT_WP4&sigi=C3KpCFSDyzsh&sigt=nsLhtu0IHAlD&.crumb=elZRHbfVXBi&fr=mcafee&fr2=piv-web&type=E211IN1589G0",
    set:(v)=> v===""?"https://in.images.search.yahoo.com/images/view;_ylt=Awrx.olIOM9n4I8_ZhC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFiYjg5NTBlMTM4MDk2NTZkMjdmNzU2NjRmYzA5YjUxBGdwb3MDMjgEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bof%2Bcoconut%2Btree%26type%3DE211IN1589G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D28&w=1063&h=1600&imgurl=1.bp.blogspot.com%2F-72CtF1Y7TjQ%2FXRyvsQ1YgkI%2FAAAAAAAAAGM%2FDltes0yg5IAk6NxlT40qDKt7EsbWVSTOQCLcBGAs%2Fs1600%2Fbeach-coconut-trees-coconuts-240526.jpg&rurl=https%3A%2F%2Fmywebbyfan1.blogspot.com%2F2019%2F07%2Fbeach-coconut-trees.html&size=547KB&p=image+of+coconut+tree&oid=1bb8950e13809656d27f75664fc09b51&fr2=piv-web&fr=mcafee&tt=Beach+Coconut+Trees&b=0&ni=21&no=28&ts=&tab=organic&sigr=IaPZ0H.UawYH&sigb=jmP0JnAT_WP4&sigi=C3KpCFSDyzsh&sigt=nsLhtu0IHAlD&.crumb=elZRHbfVXBi&fr=mcafee&fr2=piv-web&type=E211IN1589G0":v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;
