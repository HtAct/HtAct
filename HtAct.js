function HtAct(errors = true, errors_type = "console", prefix = "../components/", format = ".HTA") {
    const HtAct = document.querySelector("HtAct");
    const HtActValue = HtAct.textContent.trim().split(",");

    let HtActItems = {};

    HtAct.style.display = "none";

    HtActValue.forEach((item) => {
        const trimmedItem = item.trim();
        const [key, value] = trimmedItem.split('->').map(str => str.trim());
        HtActItems[key] = value;
    });

    let bodyContent = document.body.innerHTML;

    async function fetchFileContent(fileName) {
        try {
            const response = await fetch(prefix + fileName.substring(1, fileName.length - 1) + format);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.text();
        } catch (error) {
            if (errors === true) {
                console.error('Error fetching file:', error);
                return '';
            }
        }
    }

    async function replaceContent() {
        let fileContents = {};

        await Promise.all(Object.values(HtActItems).map(async fileName => {
            fileContents[fileName] = await fetchFileContent(fileName);
        }));

        Object.keys(HtActItems).forEach(key => {
            const fileName = HtActItems[key];
            bodyContent = bodyContent.replace(new RegExp(`@\\[${key}\\]`), fileContents[fileName] || '');
        });

        document.body.innerHTML = bodyContent;
    }

    replaceContent().then(r => {
    });
}

export {HtAct};