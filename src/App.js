
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null); //file 선택 usestate
  const [menuTextArray, setMenuTextArray] = useState([]); //메뉴 텍스트 
  const [text, setText] = useState("");                   //수동 추가 
  const [newText, setNewText] = useState("");             //추가하기 

  const handleFileSelect = (event) => {         //file선택
    setSelectedFile(event.target.files[0]);     //등록
  };          

  const handleChange = (event) => {     //글자 등록시
    setNewText(event.target.value);     //값을 setNewText에 저장
  };
  
  const handleAddClick = () => {          //추가하기 버튼을 누를시
    if(newText===""){                 //아무것도 쓰여있지 않다면 return
      return;
    }
    setText(text+newText);          //setText에 newText넣기 (text는 초기값을 위해 사용)
    setNewText("");                 //이후 초기화
  };

  async function handleUpload() {     //업로드 버튼
    if (!selectedFile) {               //선택된 파일이 없으면 선택 요청
      alert('파일을 먼저 선택해주세요.');
      return;
    }

    const formData = new FormData();      //http 통신을 위한 formdata 객체
    formData.append('image', selectedFile); //image는 key, selectedFile은 value

    try {                                 //backend와의 통신을 위한 try-catch 구문
      const response = await axios.post(          //백엔드에 보내는 axios.post (post는 보내는 역할, axios는 통신을 위한 api, await)
        'https://your-backend-endpoint/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMenuTextArray(response.data.menuTextArray);
    } catch (error) {
      console.error('업로드 중 문제가 발생했습니다.', error);
    }
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="body">
        <div className="nav">                 
          <div className="nav-top nav-margin">       {/* nav 상단 */}
            <div className="title">more먹지</div>    {/* 이름 */}
          </div>
          <div className="nav-mid nav-margin">      {/* nav 중단 (메뉴) */}
            
              <li>메뉴추천</li>                       
              <li className='choice'>메뉴판 스캔</li>
              <li>미니 게임</li>
            
          </div>
          <div className="nav-bot nav-margin">       {/* nav 하단 (아이콘)*/}
            <div className="nav-icon">
              <div className="camera icon-margin gray"><i class="fa-solid fa-camera fa-2x"></i></div>
              <div className="file gray"><i class="fa-solid fa-image fa-2x"></i></div>
            </div>
          </div>
        </div>
        <div className="content">                     {/* 메인 컨텐츠 */}
          <div className="left">                      {/* 좌측 박스 (메뉴판 업로드 칸)*/}
            <div className="yellow-box left">          {/* 클릭 시에 나오는 노란 박스*/}
              <div className="box"></div>             {/* 사진 업로드 박스*/}
              <div className="choice">                {/* 파일 선택 버튼 */}
                <input type="file" id="input-file" style={{display:"none"}} onChange={handleFileSelect}/> 
                <button><label className='button' htmlFor="input-file">파일 선택</label></button>
              </div>          
            </div>
            <div className="upload">                  {/* 업로드 버튼 */}
              <button className="yellow">이미지 업로드</button>
            </div>            
          </div>
          <div className="right">                     {/* 우측 박스 (메뉴판 스캔 후 표로 정리해서 보여주는 칸) */}
            <div className="yellow-box">              {/* 클릭시 나오는 노란 박스*/}
              <div className="box">
                  {text}&nbsp;
                </div>             {/* 표가 나오는 박스 */}
              <div className="add"><input type='text' value={newText} onChange={handleChange}/>
              <button onClick={handleAddClick}>추가하기</button></div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;

