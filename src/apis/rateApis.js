import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getRateForm = async(accessToken, teamId, navigate) => {
  
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    
    let memberList = [];
    await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/rate/information/${teamId}`).then((response)=> {
        // in case of memeber exists
        if (response.data.code === 'm-S007') {
            memberList = response.data.data;
        }
        // in case of alone
        else if(response.data.code === 'm-S008'){
            navigate(`/option`);
        }
    })
    return memberList;
}

export const evaluateMate = async (accessToken, kakaoId, rateTemperature) => {
    
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/rate/reflect/${kakaoId}/`, {'rate_temperature': rateTemperature}).then((response)=>{
        if (response.data.code === 'm-S008'){
            
        }
    })

}