import { useRef, useState } from 'react'
// import circle_icon from  '../Assets/circle.png'
// import cross_icon from '../Assets/cross.png'
import '../TicTacToe/TicTacToe.css'

let data = ["", "", "", "", "", "", "", "", ""]
let circle_icon = "https://iili.io/JYgYjwu.png"
let cross_icon = "https://iili.io/JYgYhue.png"

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toogle = (e,num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount(++count);
        }else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if (data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
            won(data[8]);
        }
        else if (data[0]==data[3] && data[3]==data[6] && data[6]!=="") {
            won(data[6]);
        }
        else if (data[1]==data[4] && data[4]==data[7] && data[7]!=="") {
            won(data[7]);
        }
        else if (data[2]==data[5] && data[5]==data[8] && data[8]!=="") {
            won(data[8]);
        }
        else if (data[0]==data[4] && data[4]==data[8] && data[8]!=="") {
            won(data[8]);
        }
        else if (data[0]==data[1] && data[1]==data[2] && data[2]!=="") {
            won(data[2]);
        }
        else if (data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="x"){
            titleRef.current.innerHTML = `Congratulations : <img src='${cross_icon}'>`;
        }
        else{
            titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}'>`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe in &nbsp <span>React</span>`
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='text-center'>
        <h1 ref={titleRef} className='mt-12 text-white text-6xl flex justify-center items-center'>Tic Tac Toe Game in <span className='text-teal-400 pl-4 mb-4'>React</span></h1>
        <div className='flex m-auto h-[600px] w-[564px] mt-4'>
            <div className='row1'>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box1} onClick={(e)=>{toogle(e,0)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box2} onClick={(e)=>{toogle(e,1)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box3} onClick={(e)=>{toogle(e,2)}}></div>    
            </div>
            <div className='row2'>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box4} onClick={(e)=>{toogle(e,3)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box5} onClick={(e)=>{toogle(e,4)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box6} onClick={(e)=>{toogle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box7} onClick={(e)=>{toogle(e,6)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box8} onClick={(e)=>{toogle(e,7)}}></div>
                <div className='boxes flex h-48 w-48 bg-gray-800 cursor-pointer' ref={box9} onClick={(e)=>{toogle(e,8)}}></div>
            </div>
        </div>
        <button onClick={()=>{reset()}} className='w-64 h-24 cursor-pointer rounded-[50px] outline-none border-none bg-gray-800 text-2xl text-teal-400 mt-6 mb-12'>Reset</button>
    </div>

  )
}

export default TicTacToe