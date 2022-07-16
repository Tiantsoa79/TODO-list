import React, {useState} from 'react';
import "../components/Card.css";


 enum Status {
     TODO= "todo",
     DOING = "doing",
     DONE = "done"
 }
  interface ListProps {
    title : string;
    description: string;
    status : Status
 }
 interface TypeObject {
     todo : ListProps[];
     doing : ListProps[];
     done : ListProps[];
 }

 const tab : ListProps[] = [
                            {title:"title",description:"add task",status:Status.TODO},
                            {title:"title",description:"add task",status:Status.DOING},
                            {title:"title",description:"add task",status:Status.DONE}
                            ];
 function formateValue(parm:ListProps[]) : TypeObject {
     const stock : TypeObject = {
         todo: [],
         done :[],
         doing : []
     };
     for (let i = 0; i < tab.length; i++) {
         if(tab[i].status=== Status.TODO){
             stock.todo.push(tab[i]);
         }
         if(tab[i].status=== Status.DOING){
             stock.doing.push(tab[i]);
         }
         if(tab[i].status=== Status.DONE){
             stock.done.push(tab[i]);
         }
     }
     return stock;
 }


const Card:React.FC=()=> {
    const [value,setValue] = useState<TypeObject| null>(formateValue(tab));

    console.log(value);
    return (
        <div className="position">
            <div className='card'>
                <div>{value?.todo.map((e, k)=>{
                    return (
                    <div className='card_body'>
                        
                        <div className='body'>
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
            <div className='card'>
                <div>{value?.doing.map((e, k)=>{
                    return (
                        <div className='card_body'>
                         
                            <div className='body'>
                                <h2>{e.title}</h2>
                                <p>{e.description}</p>
                             </div>   
                        </div>
                    );
                })}
                </div>
            </div>
            <div className='card'>
                <div>{value?.done.map((e, k)=>{
                    return (
                        <div className='card_body'>
                            
                            <div className='body'>
                                <h2>{e.title}</h2>
                                <p>{e.description}</p>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );

}/*
const List: React.FC = props =>{
    const{ items, title }= props;
   return (
       <ul></ul>
   );
}*/
export default Card;