import{c as t,j as o}from"./emotion-react.browser.esm-a1ba09a2.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c8577175.js";const f=t`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  overflow: hidden;
`,b=t`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
`,x=t`
  height: 100%;
  width: auto;
`,y=t`
  width: 100%;
  height: auto;
`;function a({size:s,src:u,alt:m="썸네일",borderRadius:h="12px",isPortrait:g=!0}){return o("div",{css:f,style:{width:s,height:s,borderRadius:h},children:o("img",{css:[b,g?y:x],src:u,alt:m,width:"100%"})})}try{a.displayName="Thumbnail",a.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"12px"},description:"",name:"borderRadius",required:!1,type:{name:"string"}},alt:{defaultValue:{value:"썸네일"},description:"",name:"alt",required:!1,type:{name:"string"}},isPortrait:{defaultValue:{value:"true"},description:"",name:"isPortrait",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"UI/Thumbnail",component:a,tags:["autodocs"],argTypes:{src:{table:{disabled:!0}},size:{options:[80,160,200,400],control:{type:"radio"}},borderRadius:{options:["0","12px","24px","100%"],control:{type:"radio"}},isPortrait:{description:"세로 방향 이미지 여부 (추후 삭제될 가능성 있음)",options:[!0,!1],control:{type:"boolean"}}},parameters:{layout:"centered",docs:{description:{component:"이미지를 정방형으로 나타내는 썸네일 컴포넌트 입니다."}}}},e={args:{src:"https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/delish-ice-cream-toppings38.jpg?crop=1xw:0.9991735537190083xh;center,top&resize=980:*",size:160,alt:"chocolate covered pretzels",borderRadius:"12px",isPortrait:!0}},r={args:{src:"https://northernyum.com/wp-content/uploads/2023/08/Ice-Cream-Toppings_Blog-Image5_Fruit-1024x405.jpg",size:80,alt:"fresh fruit",borderRadius:"100%",isPortrait:!1}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/delish-ice-cream-toppings38.jpg?crop=1xw:0.9991735537190083xh;center,top&resize=980:*',
    size: 160,
    alt: 'chocolate covered pretzels',
    borderRadius: '12px',
    isPortrait: true
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://northernyum.com/wp-content/uploads/2023/08/Ice-Cream-Toppings_Blog-Image5_Fruit-1024x405.jpg',
    size: 80,
    alt: 'fresh fruit',
    borderRadius: '100%',
    isPortrait: false
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const j=["Topping","CircularLandscapeThumbnail"];export{r as CircularLandscapeThumbnail,e as Topping,j as __namedExportsOrder,v as default};
