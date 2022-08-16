import http from "../store/ApiBooks";
import IAuthorsData from "../store/ApiBooks"


class AuthorsDataSevice {
    getAll() {
        return http.get<Array<IAuthorsData>>("/Authors");
    }
    get(id: string) {
        return http.get<IAuthorsData>(`/Authors/${id}`);
    }
    create(data: IAuthorsData) {
        return http.post<IAuthorsData>("/Authors", data);
    }
    update(data: IAuthorsData, id: any) {
        return http.put<any>(`/Authors/${id}`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/Authors/${id}`);
    }
    deleteAll() {
        return http.delete<any>(`/Authors`);
    }
}
export default new AuthorsDataSevice();