import mock from './MOCK_DATA.json'
export default class BookstoreService {
    data = {
        books:
            mock,
        users: [
            {
                id: 1,
                name: 'admin',
                password: 'admin'
            },
            {
                id: 2,
                name: 'user',
                password: 'user'
            }
        ],
        comments: [
            {
                id: 1,
                date: 'Sun Mar 27 2022',
                text: "Awesome book",
                bookId: 1,
                userId: 1
            },
            {
                id: 2,
                date: 'Sun Mar 27 2022',
                text: "Nice book",
                bookId: 1,
                userId: 2
            }
        ]
    }

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error("something goes wrong"))
            }, 500)
        })
    }

}
