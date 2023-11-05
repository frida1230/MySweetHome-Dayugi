const Hello = () => {
    //클릭시 호출되는 함수
    const onClick = () => {
        alert('안녕하세요:)')
    }


    const text = '안녕하세요. 우리집다육이입니다.:)'

    //텍스트를 자식으로 갖는 div요소를 반환
    return (
        //div의 onclick에 클릭시 콜백함수 반환
        <div onClick = {onClick}>
            {text}
        </div>
    )
}

export default Hello
