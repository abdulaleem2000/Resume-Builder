const {Configuration, OpenAIApi} = require("openai");
const router = require("express").Router();

router.get("/", async(req,res)=>{
    
    const desc = req.query.desc;
    console.log(desc);
    //conofiguring openai api by using apikey that is provided by openai once you create account on it
    const config = new Configuration({
        apiKey: "insert you api key here"
    });
    
    const openai = new OpenAIApi(config);
    //asynchronous function that generates and send content to frontend
    const runPrompt = async() => {
        //writing your prompt what you want from model
        const prompt = "Description:\n "+desc+". \nGenerate resume containing all keywords in this job description  ";
        
        const response = await openai.createCompletion({

            model: "text-davinci-003",//model provided by openai
            prompt: prompt,
            max_tokens: 3600,//setting max tokens means how many words model is going to generate it includes prompt words too
            temperature: 1
        });

        console.log(response.data);
        //sending response back to frontend
        res.status(200).json(response.data.choices[0].text);
    }
    runPrompt()
   

})

module.exports = router;

