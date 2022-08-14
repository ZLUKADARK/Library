import http from "../store/ApiBooks";
import IBooksData from "../store/ApiBooks"

class BooksdataSevice {
    getAll() {
        return http.get<Array<IBooksData>>("/Books");
    }
    get(id: string) {
        return http.get<IBooksData>(`/Books/${id}`);
    }
    create(data: IBooksData) {
        return http.post<IBooksData>("/Books", data);
    }
    update(data: IBooksData, id: any) {
        return http.put<any>(`/Books/${id}`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/Books/${id}`);
    }
    deleteAll() {
        return http.delete<any>(`/Books`);
    }
}
export default new BooksdataSevice();