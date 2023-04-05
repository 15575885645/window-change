 
interface ArrayItemType{
  children?:ArrayItemType[]
  value?:string,
  parentKey?:string
}

type SourceType=ArrayItemType[]

type MapType=Record<string,ArrayItemType>

type Demo=Awaited<Promise<Number>>

    

function longest<Type extends { length: number },S extends {length:number,c:string}>(a: Type, b: S) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  longest([1,23,4],{length:5,c:"123"})

function poll(source:ArrayItemType, map:MapType, parentKey:string, childrenKey:string = "children") {
    const { value } = source || {};
    const parentToKey = {
        parentKey,
        ...source
    }
    value && (map[value] = parentToKey)
    const children = source?.[childrenKey];
    if (children?.length) {
        children.forEach((item) => {
            poll(item, map, `${parentKey}&-${item?.value}`)
        })
    }

}

function jumpParentHas(parentKey:string, key:string) {
    const parentKeyArray = parentKey?.split('&-');
    const i = parentKeyArray.findIndex((item:any) => item?.value === key);
    if (i != -1) {

    }
}

function ArrayOjectToMap(array:SourceType) {
    const map = {};
    array.forEach((item) => {
        poll(item, map, item?.value || "", item?.value);
    })
    return map;
}
 
ArrayOjectToMap([{children:[],value:'123',parentKey:"123"}])
