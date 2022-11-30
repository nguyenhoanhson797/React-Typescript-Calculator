export interface EState {

    setStateBoolean: React.Dispatch<React.SetStateAction<boolean>>
    setStateString: React.Dispatch<React.SetStateAction<string>>
    setStateNumber: React.Dispatch<React.SetStateAction<number>>
    setStateStringArray: React.Dispatch<React.SetStateAction<string[]>>

    
    setHistoryState: React.Dispatch<React.SetStateAction<{
        result: number;
        note: string;
    }[] | []>>

    historyList: {
        result: number,
        note: string
    }[] | []

    eventTarget: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>

}