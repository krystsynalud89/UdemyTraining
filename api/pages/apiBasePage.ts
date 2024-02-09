import axios from 'axios'

class ApiBasePage {

    public async postMethod(url: string, headers: any, body: string | object, errorMessage?: string): Promise<any> {
        let bodyInfo: any = {};
        await axios({
            method: 'post',
            url,
            headers,
            data: body
        }).then((response) => {
            bodyInfo = response.data;
        }).catch(function (error) {
            console.log(error);
        })
        return bodyInfo;
    }


    public async getMethod(url: string, headers: any, errorMessage?: string): Promise<any> {
        let bodyInfo: any = {};
        await axios({
            method: 'get',
            url,
            headers: headers,
        }).then((response) => {
            bodyInfo = response.data;
        }).catch(function (error) {
            console.log(error);
        })
        return bodyInfo;
    }

    public getBaseHeaders(): any {
        return {
            'Content-Type': 'application/json'
        }
    }

    public getAuthorizationHeaders(): any {
        return {
            Authorization: `Bearer `,
            'Content-Type': 'application/json'
        }
    }
}

export default new ApiBasePage();