type Option = {
    text: string;
    styles: string;
};
interface IAnimatedText {
    options: Option[];
    wrapper?: keyof JSX.IntrinsicElements;
}
declare const AnimatedText: ({ options, wrapper: Wrapper }: IAnimatedText) => import("react/jsx-runtime").JSX.Element;
export default AnimatedText;
