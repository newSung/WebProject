
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { Container, Table, Button } from "react-bootstrap";

function LandingPage() {

    const navigate = useNavigate();

    const [amount, setAmount] = useState(10)
    const [active, setActive] = useState("1");
    const [sort, setSort] = useState('1');



    const onSelect = (e) => {
        setAmount(e.target.value)
        setActive("1");
    }
    const onSelectSort = (e) => {
        setSort(e.target.value)
    }



    return (
        <div className="container-fluid" >
            <Header />
            <div style={{ border: '1px solid black', marginRight: '30%', marginLeft: '30%', marginTop: '5%', padding: '10px' }}>
                <form style={{ display: 'flex', flexDirection: 'column', }}>
                    <div className="mb-3 row">
                        <div className="image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img className="image" alt='myself' src="img/myself.jpg" style={{ wodth: '300px', height: '200px' }} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">이름</label>
                        <div className="col-sm-10">
                            <input readOnly type="이름" className="form-control" id="이름" value='조성현' />
                        </div>
                    </div>
                    <div className="mb-3 row" style={{ marginTop: '10px' }}>
                        <label className="col-sm-2 col-form-label">생년월일</label>
                        <div className="col-sm-10">
                            <input readOnly type="생년월일" className="form-control" id="생년월일" value="1996년 6월 12일" />
                        </div>
                    </div>
                    <div className="mb-3 row" style={{ marginTop: '10px' }}>
                        <label className="col-sm-2 col-form-label">학력</label>
                        <div className="col-sm-10">
                            <input readOnly type="학력" className="form-control" id="학력" value="숭실대학교 컴퓨터 학부" />
                        </div>
                    </div>
                    <div className="mb-3 row" style={{ marginTop: '10px' }}>
                        <label className="col-sm-2 col-form-label">자기소개</label>
                        <div className="col-sm-10">
                            <textarea
                                readOnly
                                className="form-control"
                                id="자기소개"
                                value="저는 즉각적인 피드백이 있을 때 제 능력과 열정을 더 발휘할 수 있는 성격입니다. 시험을 보기 위해서 공부를 할 때에는 제가 한 달을 공부하든 두 달을 공부하든, 제 노력과 결과를 확인할 수 있는 방법은 시험 당일에 시험을 보는 것 뿐입니다. 하지만 프로그래밍을 할 때에는 컴파일러라는 유용한 도구가 있습니다. 이를 통해서 코딩을 하는 도중에 제가 작성하는 코드가 맞는지 틀렸는지, 틀렸으면 왜 틀렸는지 바로바로 확인 할 수가 있습니다. 이를 통해서 지속적으로 제가 생각하는 방향으로 프로그램 코드를 작성 할 수 있고, 만약 제 뜻대로 코딩이 되지 않아도 이를 해결하기 위해서 여러가지 방법을 지속적으로 시도해 볼 수 있습니다. 저는 이러한 과정이 매우 즐겁고 저에게 열정이 생기게 해주는 원동력이 됩니다."
                                rows="12"
                            />
                        </div>
                    </div>
                    <div>
                        <h5>"테스트 id : admin@gmail.com"</h5>
                    </div>
                    <div>
                        <h5>"테스트 pw : 1234"</h5>
                    </div>
                </form>
            </div>

            <div>
                <Container style={{ paddingTop: 100 }}>
                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr style={{ fontSize: 20 }}>
                                <th style={{ width: 40 }}>#</th>
                                <th>Method</th>
                                <th>URL</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody id="diaryTable">
                            <tr key='1'>< th>1</th><th >POST</th><th>/api/users/register</th><th>회원가입</th></tr >
                            <tr key='2'>< th>2</th><th >POST</th><th>/api/users/login</th><th>로그인</th></tr >
                            <tr key='3'>< th>3</th><th >GET</th><th> /api/users/logout</th><th> 로그아웃</th></tr >
                            <tr key='4'>< th>4</th><th >PUT</th><th>/api/users/change</th><th>비밀번호 변경</th></tr >
                            <tr key='5'>< th>5</th><th >DELETE</th><th>/api/users/delete </th><th>회원탈퇴</th></tr >
                            <tr key='6'>< th>6</th><th >GET</th><th> /api/users/auth</th><th>인증처리</th></tr >
                            <tr key='7'>< th>7</th><th >DELETE</th><th> /api/users/frienddelete/:username</th><th> 친구 삭제</th></tr >
                            <tr key='8'>< th>8</th><th >GET</th><th> /api/users/search/:username</th><th> 친구검색</th></tr >
                            <tr key='99'>< th></th><th ></th><th> </th><th> </th></tr >

                            <tr key='9'>< th>9</th><th >POST</th><th>/api/diary/write </th><th> 일기 작성</th></tr >
                            <tr key='10'>< th>10</th><th >GET</th><th>/api/diary/read </th><th>일기 읽기 </th></tr >
                            <tr key='11'>< th>11</th><th >PUT</th><th> /api/diary/update</th><th> 일기 수정</th></tr >
                            <tr key='12'>< th>12</th><th >DELETE</th><th> /api/diary/delete</th><th> 일기 삭제</th></tr >
                            <tr key='100'>< th></th><th ></th><th> </th><th> </th></tr >

                            <tr key='13'>< th>13</th><th >POST</th><th>/api/friendrequest/add </th><th>친구 요청 </th></tr >
                            <tr key='14'>< th>14</th><th >DELETE</th><th> /api/friendrequest/delete/:_id</th><th>친구요청 거절</th></tr >
                            <tr key='15'>< th>15</th><th >POST</th><th> /api/friendrequest/addfriend/:_id</th><th> 친구요청 수락</th></tr >
                            <tr key='16'>< th>16</th><th >GET</th><th> /api/friendrequest/read</th><th> 친구 요청 확인</th></tr >



                        </tbody>
                    </Table>
                    <div id="pageBtn" style={{ textAlign: "center" }}>
                    </div>
                    {/* <div style={{ textAlign: "right", paddingTop: 10 }}>
                        <Button variant="outline-dark" onClick={onNewDiaryHandler}>New Dairy</Button>
                    </div> */}
                </Container >
            </div >
        </div >


    )
}

export default LandingPage