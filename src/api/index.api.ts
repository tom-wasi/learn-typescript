import router from '../utils/router';

router.get('/', (req, res) => {
    res.json({ message: 'ahjo!' });
    },
);

export default router;
