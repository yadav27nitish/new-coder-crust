const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const connection = require('./db/connection');
const userData = require('./models/userdetail');
const port = process.env.PORT||9001;

const app = express();
const staticPath = path.join(__dirname,'../public')
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(datastructure_path);

app.use(express.static(staticPath));
// app.use('/js', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
// app.use('/jq', express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.set('view engine', 'hbs');  
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.urlencoded({extended:false})); // Important line to show the data in Json format

//Routing
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/index',(req,res)=>{
    res.render("index");
})

app.get('/login',(req,res)=>{
    res.render("login");
})
app.get('/signup',(req,res)=>{
    res.render("signup");
})
app.get('/tempfile',(req,res)=>{
    res.render("tempfile");
})



/* Data Structure files*/
app.get('/DSA-Array',(req,res)=>{
    res.render("DSA-Array");
})
app.get('/DSA-LinkedList',(req,res)=>{
    res.render("DSA-LinkedList");
})
app.get('/DSA-Stack',(req,res)=>{
    res.render("DSA-Stack");
})
app.get('/DSA-Queue',(req,res)=>{
    res.render("DSA-Queue");
})
app.get('/DSA-BinaryTree',(req,res)=>{
    res.render("DSA-BinaryTree");
})
app.get('/DSA-BinarySearchTree',(req,res)=>{
    res.render("DSA-BinarySearchTree");
})
app.get('/DSA-MarrayTree',(req,res)=>{
    res.render("DSA-MarrayTree");
})
app.get('/DSA-B-Tree',(req,res)=>{
    res.render("DSA-B-Tree");
})
app.get('/DSA-Heap',(req,res)=>{
    res.render("DSA-Heap");
})
app.get('/DSA-Hashing',(req,res)=>{
    res.render("DSA-Hashing");
})
app.get('/DSA-Graph',(req,res)=>{
    res.render("DSA-Graph");
})
app.get('/DSA-Hashing',(req,res)=>{
    res.render("DSA-Hashing");
})
app.get('/DSA-Matrix',(req,res)=>{
    res.render("DSA-Matrix");
})
app.get('/DSA-AdvanceDataStructure',(req,res)=>{
    res.render("DSA-AdvanceDataStructure");
})
/* DataStructure files calling end*/


/*ADSA files calling start */

app.get('/ADSA-IntroductionOfSTL',(req,res)=>{
    res.render("ADSA-IntroductionOfSTL");
})

app.get('/ADSA-vector',(req,res)=>{
    res.render("ADSA-vector");
})

app.get('/ADSA-ListAndForwardList',(req,res)=>{
    res.render("ADSA-ListAndForwardList");
})

app.get('/ADSA-MapAndMultimap',(req,res)=>{
    res.render("ADSA-MapAndMultimap");
})

app.get('/ADSA-Deque',(req,res)=>{
    res.render("ADSA-Deque");
})

app.get('/ADSA-SetAndMultimap',(req,res)=>{
    res.render("ADSA-SetAndMultimap");
})

app.get('/ADSA-SetAndMultimap',(req,res)=>{
    res.render("ADSA-SetAndMultiset");
})

app.get('/ADSA-ADSA-UnorderedMapAndUnorderedSet',(req,res)=>{
    res.render("ADSA-ADSA-UnorderedMapAndUnorderedSet");
})

app.get('/ADSA-IntroductionAndImplementaionOfDLL',(req,res)=>{
    res.render("ADSA-IntroductionAndImplementaionOfDLL");
})

app.get('/ADSA-InsertionOfDoublyLinkedList',(req,res)=>{
    res.render("ADSA-InsertionOfDoublyLinkedList");
})

app.get('/ADSA-DeletionOfDoublyLinkedList',(req,res)=>{
    res.render("ADSA-DeletionOfDoublyLinkedList");
})

app.get('/ADSA-IntroductionAndImplementaionOfCLL',(req,res)=>{
    res.render("ADSA-IntroductionAndImplementaionOfCLL");
})

app.get('/ADSA-InsertionOfCircularLinkedList',(req,res)=>{
    res.render("ADSA-InsertionOfCircularLinkedList");
})

app.get('/ADSA-DeletionOfCircularLinkedList',(req,res)=>{
    res.render("ADSA-DeletionOfCircularLinkedList");
})

app.get('/ADSA-ProgramToCheckTheLinkedListIsCircularOrNot',(req,res)=>{
    res.render("ADSA-ProgramToCheckTheLinkedListIsCircularOrNot");
})

app.get('/ADSA-ProgramToDeleteaGivenNodeWithoutHeadPointer',(req,res)=>{
    res.render("ADSA-ProgramToDeleteaGivenNodeWithoutHeadPointer");
})

app.get('/ADSA-ProgramToFindtheIntersectionPointOfLinkedLists',(req,res)=>{
    res.render("ADSA-ProgramToFindtheIntersectionPointOfLinkedLists");
})

app.get('/ADSA-ProgramToReverseGivenTheLinkedList',(req,res)=>{
    res.render("ADSA-ProgramToReverseGivenTheLinkedList");
})

app.get('/ADSA-IntroductionOfGraph',(req,res)=>{
    res.render("ADSA-IntroductionOfGraph");
})

app.get('/ADSA-IntroductionAndImplementaionOfBFSTraversal',(req,res)=>{
    res.render("ADSA-IntroductionAndImplementaionOfBFSTraversal");
})

app.get('/ADSA-IntroductionAndImplementaionOfDFSTraversal',(req,res)=>{
    res.render("ADSA-IntroductionAndImplementaionOfDFSTraversal");
})

app.get('/ADSA-BipartiteGraph',(req,res)=>{
    res.render("ADSA-BipartiteGraph");
})

app.get('/ADSA-ConnectedComponents',(req,res)=>{
    res.render("ADSA-ConnectedComponents");
})

app.get('/ADSA-DetectCycleInTheGivenGraph',(req,res)=>{
    res.render("ADSA-DetectCycleInTheGivenGraph");
})

app.get('/ADSA-SccKosarajuAlgorithm',(req,res)=>{
    res.render("ADSA-SccKosarajuAlgorithm");
})

app.get('/ADSA-BinaryRepresentaionOfANumber',(req,res)=>{
    res.render("ADSA-BinaryRepresentaionOfANumber");
})

app.get('/ADSA-CountSetBitsOfAnInteger',(req,res)=>{
    res.render("ADSA-CountSetBitsOfAnInteger");
})

app.get('/ADSA-CountNoOfSetBitsUpton',(req,res)=>{
    res.render("ADSA-CountNoOfSetBitsUpton");
})

app.get('/ADSA-KthBitIsSetBitOrNot',(req,res)=>{
    res.render("ADSA-KthBitIsSetBitOrNot");
})

app.get('/ADSA-FindTheNonRepeatedNumberFromTheGivenArray',(req,res)=>{
    res.render("ADSA-FindTheNonRepeatedNumberFromTheGivenArray");
})

app.get('/ADSA-LogOfGivenNumbernWithBaseX',(req,res)=>{
    res.render("ADSA-LogOfGivenNumbernWithBaseX");
})

app.get('/ADSA-NextHeigherNumberWithTheSameNoOfSetBits',(req,res)=>{
    res.render("ADSA-NextHeigherNumberWithTheSameNoOfSetBits");
})

app.get('/ADSA-NextPowerOf2',(req,res)=>{
    res.render("ADSA-NextPowerOf2");
})

app.get('/ADSA-PositionOfOnlySetBit',(req,res)=>{
    res.render("ADSA-PositionOfOnlySetBit");
})

app.get('/ADSA-PowerOf2',(req,res)=>{
    res.render("ADSA-PowerOf2");
})

app.get('/ADSA-PowerOf4',(req,res)=>{
    res.render("ADSA-PowerOf4");
})

app.get('/ADSA-RightSetBitMaskTheory',(req,res)=>{
    res.render("ADSA-RightSetBitMaskTheory");
})

app.get('/ADSA-TurnOffkthBit',(req,res)=>{
    res.render("ADSA-TurnOffkthBit");
})

app.get('/ADSA-TurnOffrightSetBit',(req,res)=>{
    res.render("ADSA-TurnOffrightSetBit");
})

app.get('/ADSA-HCFOfTwoNumbers',(req,res)=>{
    res.render("ADSA-HCFOfTwoNumbers");
})

app.get('/ADSA-LCMOfTwoNumbers',(req,res)=>{
    res.render("ADSA-LCMOfTwoNumbers");
})

app.get('/ADSA-BinarySearchAlgorithm',(req,res)=>{
    res.render("ADSA-BinarySearchAlgorithm");
})

app.get('/ADSA-BubbleSortAlgorithm',(req,res)=>{
    res.render("ADSA-BubbleSortAlgorithm");
})

app.get('/ADSA-BucketSortAlgorithm',(req,res)=>{
    res.render("ADSA-BucketSortAlgorithm");
})

app.get('/ADSA-CountingSortAlgorithm',(req,res)=>{
    res.render("ADSA-CountingSortAlgorithm");
})

app.get('/ADSA-ExponentialSearchAlgorithm',(req,res)=>{
    res.render("ADSA-ExponentialSearchAlgorithm");
})

app.get('/ADSA-HeapSortAlgorithm',(req,res)=>{
    res.render("ADSA-HeapSortAlgorithm");
})

app.get('/ADSA-InsertionSortAlgorithm',(req,res)=>{
    res.render("ADSA-InsertionSortAlgorithm");
})

app.get('/ADSA-InterpolationSearchAlgorithm',(req,res)=>{
    res.render("ADSA-InterpolationSearchAlgorithm");
})

app.get('/ADSA-JumpSearchAlgorithm',(req,res)=>{
    res.render("ADSA-JumpSearchAlgorithm");
})

app.get('/ADSA-LinearSearchAlgorithm',(req,res)=>{
    res.render("ADSA-LinearSearchAlgorithm");
})

app.get('/ADSA-MergeSortAlgorithm',(req,res)=>{
    res.render("ADSA-MergeSortAlgorithm");
})

app.get('/ADSA-QuickSortAlgorithm',(req,res)=>{
    res.render("ADSA-QuickSortAlgorithm");
})

app.get('/ADSA-RedixSortAlgorithm',(req,res)=>{
    res.render("ADSA-RedixSortAlgorithm");
})

app.get('/ADSA-SelectionSortAlgorithm',(req,res)=>{
    res.render("ADSA-SelectionSortAlgorithm");
})

app.get('/ADSA-ShellSortAlgorithm',(req,res)=>{
    res.render("ADSA-ShellSortAlgorithm");
})

app.get('/ADSA-TernarySearchAlgorithm',(req,res)=>{
    res.render("ADSA-TernarySearchAlgorithm");
})
 

/* ADSA files callign end*/



app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.get('/aboutusfile',(req,res)=>{
    res.render("aboutusfile");
})

app.post('/contact', async(req,res)=>{
    try{
        // res.send(req.body);
        const userData1 = new userData(req.body);
        const data = await userData1.save();
        res.status(201).render('index');
    }catch(err){
        res.status(500).render(err);
        console.log(err);
    }
})

app.listen(port,()=>{
    console.log('Server is running...');
    console.log(port);
})