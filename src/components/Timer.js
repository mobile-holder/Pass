import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Timer = ({ navigation }) => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        if (time < 1) {
            navigation.pop();
        };
        const timeOut = setTimeout(() => {
            if (time < 1) {
                clearTimeout(timeOut);
            } else setTime(time - 1);
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        };
    }, [time]);

    /*const timeOut = setInterval(() => { 
        if(time>0) {
            setTime(time-1);
        };
        if(time===0) {
            clearInterval(timeOut);
        }
    },1000);
    return () => { //멘토님이 알려주신 부분
        clearInterval(timeOut);
    }
}, [time]);*/

    return <Text style={{ fontSize: 20 }}>남은시간 : {`${time}`} 초</Text>
};

export default Timer;