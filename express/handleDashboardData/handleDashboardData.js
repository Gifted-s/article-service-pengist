

const handleGetDashboardData = async function (req, res, Article) {
    try {

        const promise1 = new Promise((resolve, reject) => {
            Article.aggregate(
                [
                    { $match: { authorId: req.params.id } },
                    {
                        $group: {
                            _id: null,
                            totalViews: { $sum: "$numberOfViews" },
                            totalLikes: { $sum: "$numberOfLikes" },
                            totalPosts: { $sum: 1 }

                        }
                    }
                ], (err, response) => {
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })

        })

        const promise2 = new Promise((resolve, reject) => {
            Article.aggregate(
                [
                    { $match: { authorId: req.params.id } },
                    { $project: { content: 0 } },
                    { $sort: { noOfComments: -1, numberOfLikes: -1 } },
                    { $limit: 3 }
                ], (err, response) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(response)
                })
        })


        const [data, articles] = await Promise.all([promise1, promise2]);
        // if (!data) {
        //     data = [{}]
        // }
        // if (!data[0]["totalViews"]) {
        //     data[0]["totalViews"] = 0;
        // }
        // if (!data[0]["totalLikes"]) {
        //     data[0]["totalLikes"] = 0;
        // }
        // if (!data[0]["totalPosts"]) {
        //     data[0]["totalPosts"] = 0;
        // }
       
        const resp = { data: data[0], articles };

        return res.status(200).send(resp)

    } catch (error) {
        return res.status(500).send(error)
    }


}
// export function for further usage
module.exports = handleGetDashboardData
