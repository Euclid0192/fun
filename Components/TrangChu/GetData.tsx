import React, { useEffect } from 'react'

let SliderData: any, ChillData, ZingChart, BaiHatMoi, AlbumHot;
let DATA;

fetch('https://api-zingmp3-vercel.vercel.app/api/home')
    .then(res => res.json())
    .then(data => {
        DATA = data.data.items;
        SliderData = DATA[0].items;
        ChillData = DATA[3].items;
        ZingChart = DATA[9].items;
        BaiHatMoi = DATA[2].items.all;
        AlbumHot = DATA.find((ele: any )=> ele.title === "Album Hot").items;

        console.log("Album Hot as;ldkfja;lskdf", AlbumHot);
    })


export { SliderData, ChillData, ZingChart, BaiHatMoi, AlbumHot }


