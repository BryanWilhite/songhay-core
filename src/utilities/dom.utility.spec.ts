import { DomUtility } from './dom.utility';

test('should get HTML element', () => {
    const a = document.createElement('a') as HTMLAnchorElement;
    const caption = 'click me';
    a.textContent = caption;
    const mockElementRef = { nativeElement: a };
    const actual = DomUtility.getHtmlElement(mockElementRef);
    expect(actual).not.toBeNull();
    expect(actual.textContent).toEqual(caption);
});

test('should get h1 element', () => {
    const element = DomUtility.getHtmlHeadingElement(1);
    expect(element).not.toBeNull();
    expect(element.localName).toEqual('h1');
});

test('should get h2 element', () => {
    const element = DomUtility.getHtmlHeadingElement();
    expect(element).not.toBeNull();
    expect(element.localName).toEqual('h2');
});

xtest('should get style declaration', () => {});

test('should parse into HTML element', () => {
    const elementName = 'div';
    const caption = 'click me';
    const div = DomUtility.parseAsHtmlElement<HTMLDivElement>(
        `<div><a href="#">${caption}</a></div>`,
        elementName
    );
    expect(div).toBeTruthy();
    expect(div.localName).toEqual(elementName);
    expect(div.childElementCount).toEqual(1);

    const a = div.firstElementChild as HTMLAnchorElement;
    expect(a).toBeTruthy();
    expect(a.textContent).toEqual(caption);
    /*
        FUNKYKB: innerText was undefined!
        Use textContent instead? [http://perfectionkills.com/the-poor-misunderstood-innerText/]
    */
});
