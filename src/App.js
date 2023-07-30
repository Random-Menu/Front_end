
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [menuTextArray, setMenuTextArray] = useState([]);
  const [text, setText] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  async function handleUpload() {
    if (!selectedFile) {
      alert('파일을 먼저 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(
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
              <div className="add"><input type='text' value={text} onChange={handleChange}/>추가하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

