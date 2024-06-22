export const adjustAreaHeight = (ref: React.RefObject<HTMLTextAreaElement>) => {
    if (ref.current) {
        ref.current.style.height = 'auto';
        ref.current.style.height = ref.current.scrollHeight + "px";
    }
};

export const adjustAreaHeightGrid = (
    ref1: React.RefObject<HTMLTextAreaElement>,
    ref2: React.RefObject<HTMLTextAreaElement>
    ) => {
    if (ref1.current && ref2.current) {
        ref1.current.style.height = 'auto';
        ref2.current.style.height = 'auto';
        const height = Math.max(ref1.current.scrollHeight, ref2.current.scrollHeight)
        ref1.current.style.height = height + "px";
        ref2.current.style.height = height + "px";
    }
};

export const validateContent = (input: string, regex:RegExp, setValidatorState: any) => {
        if(regex.test(input)) { setValidatorState(true)}
        else{setValidatorState(false)}
}