
export interface  IAddArticleButton {
    openModal : () => void
};

export interface IDate {
        date? : string
};

export interface IArticleActions {
    description: string
    title: string
    text: string
    saveArticle? : () => void
    deleteArticle? : () => void
    editArticle? : () => void
};

export interface INavigation {
    title: string;
    link: string;
};

export interface INavigationParams {
    navigation : Array<INavigation>
};

export interface IArticleEdit {
    article : IArticleActions
    isEdit : boolean
    editArticle : any
};

export interface IListPage {
    notFound? : boolean
    data? : IArticle[]
};


export interface IDescription{
    description : string;
};


export interface IArticle {
    id: number
    title:string
    description : string
    text: string
    publishingDate: string
    isNew : boolean
};

