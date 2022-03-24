import Main from './Main';
// Main 컴포넌트 임포
import Detail from './Detail'
// Detail 컴포넌트 임포
import { Route } from "react-router-dom";
// 라우팅 해주기 위한 프로젝트 임포트


function App() {



  return (
    <div className="App">
      {/* 메인페이지는 "/"으로 라우팅 */}
      <Route path="/" exact>
        <Main />
      </Route>

      {/* 디테일 페이지로 가는 라우팅, 파라미터 값을 활용하여 동적 라우팅을 가능케 함 */}
      {/* 꼭 props에서 받아오지 않아도, useParams 훅을 사용하면 간단히 파라미터에 접근할 수 있다  */}
      <Route path="/detail/:DetailDay">
        <Detail />
      </Route>

    </div>
  );
}







export default App;
