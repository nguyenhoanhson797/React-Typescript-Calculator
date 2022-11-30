// export interface EState {

//     // setStateBoolean: React.Dispatch<React.SetStateAction<boolean>>
//     // setStateString: React.Dispatch<React.SetStateAction<string>>
//     // setStateNumber: React.Dispatch<React.SetStateAction<number>>
//     // setStateStringArray: React.Dispatch<React.SetStateAction<string[]>>

    
//     // setHistoryState: React.Dispatch<React.SetStateAction<{
//     //     result: number;
//     //     note: string;
//     // }[] | []>>

//     // historyList: {
//     //     result: number,
//     //     note: string
//     // }[] | []

    

// }

// export type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>
// export type SetStateString = React.Dispatch<React.SetStateAction<string>>
// export type SetStateNumber = React.Dispatch<React.SetStateAction<number>>
// export type SetStateStringArray = React.Dispatch<React.SetStateAction<string[]>>

export type DispatchAction<T> = React.Dispatch<React.SetStateAction<T>>
export type InputEventTarget = React.ChangeEvent<HTMLInputElement>
export type MouseEventTarget = React.MouseEvent<HTMLDivElement, MouseEvent>