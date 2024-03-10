import{c as a,b as c,j,a as r}from"./emotion-react.browser.esm-a1ba09a2.js";import{r as _}from"./index-56d4de0b.js";import{G as k}from"./iconBase-da858713.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c8577175.js";import"./_commonjsHelpers-042e6b4d.js";function M(e){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z"},child:[]}]})(e)}const H=a`
  position: relative;
  display: inline-block;
`,V={small:a`
    font-size: 12px;
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 12px;
  `,medium:a`
    font-size: 16px;
    padding: 6px 12px;
    margin-left: 12px;
    border-radius: 16px;
  `,large:a`
    font-size: 24px;
    padding: 10px 20px;
    margin-left: 18px;
    border-radius: 24px;
  `},q=(e,l,i)=>a`
  position: absolute;
  top: 0;
  left: 100%;
  white-space: nowrap;
  background: ${l};
  color: ${i};
  ${V[e]}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;function o({children:e,text:l="",size:i="small",hasIcon:b=!1,background:P="lightgray",color:S="white",...z}){const[I,p]=_.useState(!1);return c("div",{css:H,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),...z,children:[e,I&&c("span",{css:q(i,P,S),children:[b&&j(M,{}),l]})]})}try{o.displayName="Popover",o.__docgenInfo={description:"",displayName:"Popover",props:{text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},background:{defaultValue:{value:"lightgray"},description:"",name:"background",required:!1,type:{name:"string"}},color:{defaultValue:{value:"white"},description:"",name:"color",required:!1,type:{name:"string"}},hasIcon:{defaultValue:{value:"false"},description:"",name:"hasIcon",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"UI/Popover",component:o,tags:["autodocs"],argTypes:{background:{control:{type:"color"}},color:{control:{type:"color"}}},parameters:{layout:"centered",docs:{description:{component:"내부 `children` 요소에 마우스를 hover 시 툴팁을 보여주는 컴포넌트 입니다. <br />우선은 Tooltip의 사이즈와 배경 및 폰트 색상을 지정할 수 있도록 구현하였습니다."}}}},t={name:"Small",args:{text:"tooltip text",size:"small",hasIcon:!1},render:e=>r.jsx(o,{...e,children:r.jsx("p",{children:"Here!"})})},n={name:"Medium",args:{text:"tooltip text",size:"medium",hasIcon:!1,background:"#000",color:"#fff"},render:e=>r.jsx(o,{...e,children:r.jsx("h2",{children:"Here!"})})},s={name:"Large",args:{text:"tooltip text",size:"large",hasIcon:!0,background:"#ff6700",color:"#fff"},render:e=>r.jsx(o,{...e,children:r.jsx("h1",{children:"Here!"})})};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Small',
  args: {
    text: 'tooltip text',
    size: 'small',
    hasIcon: false
  },
  render: arg => <Popover {...arg}>
      <p>Here!</p>
    </Popover>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Medium',
  args: {
    text: 'tooltip text',
    size: 'medium',
    hasIcon: false,
    background: '#000',
    color: '#fff'
  },
  render: arg => <Popover {...arg}>
      <h2>Here!</h2>
    </Popover>
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,v,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Large',
  args: {
    text: 'tooltip text',
    size: 'large',
    hasIcon: true,
    background: '#ff6700',
    color: '#fff'
  },
  render: arg => <Popover {...arg}>
      <h1>Here!</h1>
    </Popover>
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const C=["SmallPopoverStory","MediumPopoverStory","LargePopoverStory"];export{s as LargePopoverStory,n as MediumPopoverStory,t as SmallPopoverStory,C as __namedExportsOrder,B as default};
