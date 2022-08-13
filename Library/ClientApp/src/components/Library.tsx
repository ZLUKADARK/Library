import { error } from 'console';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as Booksstore from '../store/ApiBooks';
import { Component, ChangeEvent } from "react";
import ApiBooks from "../store/ApiBooks";
import IBookData from '../store/ApiBooks';
import Services from '../Services/BookServices';


type Props = {};
type State = IBookData & {
    correntBook: Array<IBookData> | null,
};



class Library extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        
    }

    i: Number = 0;
    books: Array<IBookData> = [];

    componentDidMount() {
        this.getAllBooks();
    }


    getAllBooks() {
        Services.getAll()
            .then((response: any) => {
                this.setState(this.books = response.data)
                
                console.table(this.books);
            })
            .catch((e: Error) => {
                console.log(e);
                
            });
    }

    
    

    public render() {

     

        return (
            <React.Fragment>

                
                {
                    this.books.map((item, i) => {
                        return <ListItem name={item.name} author={item.author} genre={item.genre} releseDate={item.releseDate} key={item.id} />
                    })
                }
                    
                
            </React.Fragment>
        );
    }
};

interface ListProps {
    item: Object,


}

class ListItem extends React.Component<IBookData>{
    constructor(props: IBookData) {
        super(props);
    }

    public render() {
        return(
            <>
                <div>
                    <h1> {this.props.name} </h1>
                    <h2> {this.props.genre} </h2>
                    <h2> {this.props.author.name} </h2>
                </div>
            </>
        )
    }
}


export default connect()(Library as any);