import { evaluate } from 'mathjs';
// Generates a random number
const rdGen = (min, max, round, type) => {
    const numb = Math.random() * (max - min) + min;
    if (type === 'even') {
        const res = +numb.toFixed(round ? round : 0);
        return res % 2 === 0 ? res : res + 1;
    }
    else if (type === 'odd') {
        const res = +numb.toFixed(round ? round : 0);
        return res % 2 === 0 ? res + 1 : res;
    }
    else {
        return +numb.toFixed(round ? round : 0);
    }
};
// Check if the param is of type random
const rdCheck = (param) => param.min !== undefined && param.max !== undefined && param.round !== undefined;
// Convert scope from string into object
const scopeMiddleware = (scope) => {
    const _scope = JSON.parse(scope);
    //console.log(" 00 ",_scope)
    Object.entries(_scope).forEach(([key, value]) => {
        if (typeof value !== 'string' && rdCheck(value)) {
            const { min, max, round, type } = value;
            const random = rdGen(min, max, round, type);
            _scope[key] = String(random);
        }
    });
    //console.log(" 01 ",_scope)
    return _scope;
};
const bodyParser = (body, scope /* { [id: string]: string } */) => {
    //console.log(body)
    const words = body.split('|');
    //console.log("words ", words, "scope", scope)
    const bodyParsed = words.map((word) => {
        return scope[word] !== undefined ? evaluate(middleParser(String(scope[word]), scope)) : word; //scope[word] : word;
    });
    return bodyParsed.join('');
};
const middleParser = (word, scope /* , data: FactoryData */) => {
    //const scope = scopeMiddleware(data.scope);
    const middleWords = word.split('|');
    const wordsParsed = middleWords.map((middleWord) => {
        return scope[middleWord] !== undefined ? scope[middleWord] : middleWord;
    });
    //console.log("Word", word,"MiddleWords ",middleWords, "wParserd", wordsParsed)
    return wordsParsed.join('');
};
const alternativeParser = (/* data: FactoryData, */ body, scope) => {
    const words = body.split('|');
    const bodyParsed = words.map((word) => {
        return scope[word] !== undefined ? evaluate(middleParser(String(scope[word]), scope)) : word;
    });
    return bodyParsed.join('');
};
function applyBodyParser(inputObj, scope) {
    const transformedBlocks = inputObj.blocks.map((block) => ({
        ...block,
        data: {
            ...block.data,
            text: block.data.text ? bodyParser(block.data.text, scope) : '2345'
        }
    }));
    return {
        ...inputObj,
        blocks: transformedBlocks
    };
}
function muxBody(input, scope) {
    try {
        const parsedJSON = JSON.parse(input);
        return applyBodyParser(parsedJSON, scope);
    }
    catch (error) {
        if (error instanceof SyntaxError && error.message.includes('JSON')) {
            return bodyParser(input, scope);
        }
        else {
            console.error('Erro:', error);
            return 'ERROR DETECTED';
        }
    }
}
export const questParser = (data) => {
    if (data.scope) {
        const scope = scopeMiddleware(data.scope);
        const body = muxBody(data.body, scope); //bodyParser(data.body, scope);
        const alternatives = data.alternatives.map((a) => {
            return alternativeParser(a.statement, scope);
        });
        const questData = {
            body,
            alternatives
            /* editorBody */
        };
        return questData;
    }
    else {
        const questData = {
            body: data.body,
            alternatives: data.alternatives.map((a) => a.statement)
            /* editorBody */
        };
        return questData;
    }
    //let editorBody;
    /* if (data.editorBody) {
        editorBody = applyBodyParser(data.editorBody, scope);
    } */
    //console.log(muxBody(data.body, scope));
    //console.log(muxBody(JSON.stringify(data.editorBody), scope))
    // const questData = {
    // 	body,
    // 	alternatives
    // 	/* editorBody */
    // };
    // return questData;
};
