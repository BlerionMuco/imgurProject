import { cleanup, render } from '@testing-library/react';
import ImageComponent from "../Components/ImageComponent"

afterEach(cleanup);

describe('The image component', () => {

    test('alt and src contains correct value', () => {
        const post = {
            images: [{ link: "https://i.imgur.com/72DOd72.jpg" }, { link: "https://i.imgur.com/72DOd72.jpg" }],
            title: "Test by Jest"
        }
        console.log("efjskjfhkj", post.images, post.title);
        render(<ImageComponent post={post} />)
        const testImage = document.querySelector("img");
        expect(testImage.alt).toContain("Test by Jest");
        expect(testImage.src).toContain("https://i.imgur.com/72DOd72.jpg?w=248&fit=crop&auto=format");
    })
});