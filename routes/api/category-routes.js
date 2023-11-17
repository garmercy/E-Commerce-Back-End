const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categData = await Category.findAll();
    res.status(200).json(categData);
  } catch (err) {
   res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categData = await Category.findByPk(req.params.id).catch((err) =>
    res.json(err));
    if (!categData){
      res.status(404).json({message:'No category found with this id!'})
      return;
    }
    res.status(200).json(categData);
    }catch(err){
      res.status(500).json(err);
    }
   
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const categData = await Category.create();
    res.status(200).json(categData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
   // update a category by its `id` value
  try {
    const categData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categData[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
