```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  {
    $match: { /* your match stage */ }
  },
  {
    $group: {
      _id: '$fieldName', // Field to group by
      count: { $sum: 1 } // Count documents for each group
    }
  },
  {
    $sort: { count: -1 } // Sort by count in descending order
  },
  {
    $limit: 10 } // Limit to the top 10 groups
])
.toArray((err, results) => {
  if (err) {
    console.error('Aggregation error:', err);
  } else {
    console.log('Top 10 groups:', results);
  }
});
```